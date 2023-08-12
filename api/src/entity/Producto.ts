import { IsEmail, IsNotEmpty, MaxLength, maxLength } from 'class-validator';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DetalleFactura } from './DetalleFactura';
import { CategoriaProducto } from './CategoriaProducto';

@Entity()
export class Producto {
  @PrimaryColumn()
  id: number;

  @Column({ length: 50 })
  @MaxLength(50, { message: 'Debe ser menos de 50 caracteres' })
  @IsNotEmpty()
  nombre: string;

  @Column()
  @IsNotEmpty({ message: 'ddd' })
  precio: number;
  @Column()
  @IsNotEmpty()
  stock: number;
  @Column()
  fechaIngreso: Date;
  @Column()
  estado: boolean;

  @ManyToOne(() => CategoriaProducto, (categoria) => categoria.productos)
  categoria: CategoriaProducto;

  @OneToMany(() => DetalleFactura, (detalle) => detalle.producto)
  detallesFactura: DetalleFactura[];
}
