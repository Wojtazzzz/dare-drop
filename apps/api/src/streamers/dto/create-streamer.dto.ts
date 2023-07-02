import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

const PLATFORMS = ['twitch', 'youtube', 'tiktok', 'kick', 'rumble'] as const;

export class CreateStreamerDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 50)
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(PLATFORMS)
  platform: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 350)
  description: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  image?: string;
}
