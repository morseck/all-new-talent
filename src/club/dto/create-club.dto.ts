import { PartialType } from '@nestjs/swagger';
import { Club } from '../entities/club.entity';

export class CreateClubDto extends PartialType(Club) {}
