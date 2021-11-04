import {
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Athlete } from '../../athlete/entities/athlete.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class AthleteInformationMultimedia {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ nullable: true })
  lien: string;

  @ApiProperty()
  @Column({ nullable: true, default: false })
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

  @OneToOne(() => Athlete)
  @JoinColumn()
  athlete: Athlete;
}
