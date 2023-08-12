import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Producto } from './Producto';

@Entity()
export class CategoriaProducto {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 50 })
  nombre: String;
  @Column()
  estado: boolean;

  @OneToMany(() => Producto, (producto) => producto.categoria)
  productos: Producto[];
}
