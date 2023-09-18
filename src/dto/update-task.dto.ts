import { IsString, IsBoolean, IsOptional } from "class-validator/types/decorator/decorators"

export class updateTaskDto {

    @IsString()
    @IsOptional()
    title?: string

    @IsString()
    @IsOptional()
    description?: string

    @IsBoolean()
    @IsOptional( )
    done?: boolean
}