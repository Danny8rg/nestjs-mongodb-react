import { IsString, IsOptional, IsNotEmpty , IsBoolean} from "class-validator"

export class createTaskDto {

    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsOptional()
    description? : string

    @IsBoolean()
    @IsOptional()
    done?: boolean
}