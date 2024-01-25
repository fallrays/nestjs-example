import { 
    Entity, 
    Unique, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn 
} from "typeorm";

@Entity({ name: 'nestjs_tokens'})
@Unique(['user_id'])
export class TokensEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', default: 0, comment: 'user id' })
    user_id: number;

    @Column({ type: 'varchar', length: 255, comment: 'access token' })
    accessToken: string;

    @Column({ type: 'varchar', length: 255, comment: 'refresh token' })
    refreshToken: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn({ nullable: true })
    deleted_at: Date;
}