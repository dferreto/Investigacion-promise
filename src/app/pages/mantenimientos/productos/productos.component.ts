import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Productos } from 'src/app/shared/models/productos';
import { ProductosService } from 'src/app/shared/services/productos.service';
import { AdminProductosComponent } from './admin-productos/admin-productos.component';
import { ToastrService } from 'ngx-toastr';

// const ELEMENT_DATA: Productos[] = [];

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent {
  displayedColumns: string[] = [
    'id',
    'nombre',
    'categoria',
    'precio',
    'acciones',
  ];

  dataSource = new MatTableDataSource();

  constructor(
    private srvProductos: ProductosService,
    public dialog: MatDialog,
    private mensajeria: ToastrService
  ) {}
  ngOnInit() {
    this.cargarlista()
  }

  cargarlista(){
    this.srvProductos.getAll().subscribe(
      (datos) => {
        // console.log(datos);
        this.dataSource.data = datos;
      },
      (error) => {
        this.mensajeria.error(error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  modificar(): void {
    alert('modificar');
  }

  // eliminar(id: number): void {
  //   this.srvProductos.eliminar(id).subscribe(
  //     (dato) => {
  //       alert('Se eliminó el producto');
  //     },
  //     (err) => {
  //       alert('Error al eliminar');
  //     }
  //   );
  // }

  eliminar(id: number): void {
    this.eliminarUsuario(id)
      .then(() => {
        this.mensajeria.success('SE ELIMINO CORRECTAMENTE');
      })
      .catch(() => {
        this.mensajeria.success('ERROR AL ELIMINAR');
      });
  }

  detalle(dato: Productos): void {
    alert(dato.nombre);
  }

  eliminarUsuario(id: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.srvProductos.eliminar(id).subscribe(
        () => {
          resolve();
        },
        (error) => {
          reject();
        }
      );
    })
    ;
  }

  guardarEnBaseDeDatos(data: any): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      // Simulando una operación asincrónica (puedes reemplazar esto con tu lógica de guardado real)
      setTimeout(() => {
        const exito = true; // Cambiar a true para simular un éxito, o a false para simular un fallo
        if (exito) {
          resolve(true); // Operación exitosa
        } else {
          reject('Error al guardar en la base de datos'); // Operación fallida
        }
      }, 5000); // Simulamos un retraso de 5 segundos
    });
  }

  onClickGuardar() {
    const data = {}; // Datos del formulario
    this.guardarEnBaseDeDatos(data)
      .then(result => {
        console.log('Guardado exitoso:', result);
      })
      .catch(error => {
        console.error('Error al guardar:', error);
      });
  }

  abrirDialog(producto?: Productos): void {
    let dialogOpen;
    if (producto) {
      dialogOpen = this.dialog.open(AdminProductosComponent, {
        width: '700px',
        height: '700px',
        data: { producto },
      });
    } else {
      dialogOpen = this.dialog.open(AdminProductosComponent, {
        width: '700px',
        height: '700px',
      });
    }
    

    dialogOpen.afterClosed().subscribe((data)=>{
      this.cargarlista();
    })
  }

}
