import { 
    Entity, 
    Unique, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn 
} from "typeorm";

@Entity({ name: 'nestjs_users'})
@Unique(['id'])
export class UsersEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50, comment: 'name' })
    name: string;

    @Column({ type: 'varchar', nullable: true, length: 100, comment: 'email' })
    email: string;

    @Column({ type: 'varchar', length: 255, comment: 'password' })
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn({ nullable: true })
    deleted_at: Date;
}