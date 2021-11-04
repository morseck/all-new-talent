import {
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Athlete } from '../../athlete/entities/athlete.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Discipline {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ nullable: true })
  nom: string;

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

  @OneToMany(() => Athlete, (athlete) => athlete.discipline)
  athletes: Athlete[];
}
