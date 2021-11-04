import {
  BeforeUpdate,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Athlete } from '../../athlete/entities/athlete.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Club {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ nullable: false })
  nom: string;

  @ApiProperty()
  @Column({ nullable: false })
  championnat: string;

  @ApiProperty()
  @Column({ nullable: false })
  division: string;

  @ApiProperty()
  @Column({ nullable: true, default: true })
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

  @ManyToMany(() => Athlete)
  @JoinTable()
  athlete: Athlete[];
}
