import { PartialType } from '@nestjs/swagger';
import { Discipline } from '../entities/discipline.entity';

export class CreateDisciplineDto extends PartialType(Discipline) {}
