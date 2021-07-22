import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("uf")
export class Uf {
    @PrimaryGeneratedColumn()
    iduf: number;
    @Column({ type: "varchar", length: 60 })
    nome: string;
    @Column({ type: "varchar", length: 2 })
    sigla: string;

}