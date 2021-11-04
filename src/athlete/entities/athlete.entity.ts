import { ApiProperty } from '@nestjs/swagger';
import {
  BeforeUpdate,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Discipline } from '../../discipline/entities/discipline.entity';

@Entity()
export class Athlete {
  @ApiProperty({ required: false, nullable: true })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ nullable: false })
  nom: string;

  @ApiProperty()
  @Column({ nullable: false })
  prenom: string;

  @ApiProperty()
  @Column({ nullable: true })
  adresse: string;

  @ApiProperty()
  @Column({ nullable: true, type: 'date' })
  date_de_naissance: Date;

  @ApiProperty()
  @Column({ nullable: true })
  telephone_principal: string;

  @ApiProperty()
  @Column({ nullable: false, default: true })
  visible: boolean;

  @ApiProperty()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @ApiProperty()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @BeforeUpdate()
  updateTimestamp() {
    this.updated_at = new Date();
  }

  @ManyToOne(() => Discipline, (discipline) => discipline.athletes)
  discipline: Discipline;
}
