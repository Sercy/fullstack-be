import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsDefined, IsOptional, IsString } from 'class-validator';

export class CreateItemDto {
  @IsDefined()
  @IsString()
  @ApiProperty({ description: 'name', example: 'John Doe', type: 'string' })
  name!: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional({ description: 'isProcessed', example: false, type: 'boolean' })
  isProcessed?: boolean;
}
