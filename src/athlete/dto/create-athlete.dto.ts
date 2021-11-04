import { Athlete } from '../entities/athlete.entity';
import { PartialType } from '@nestjs/swagger';

export class CreateAthleteDto extends PartialType(Athlete) {}
