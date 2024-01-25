import { 
    Entity, 
    Unique, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn 
} from "typeorm";

@Entity({ name: 'nestjs_boards'})
@Unique(['id'])
export class BoardsEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50, comment: 'name' })
    name: string;

    @Column({ type: 'varchar', nullable: true, length: 100, comment: 'email' })
    email: string;

    @Column({ type: 'varchar', length: 50, comment: 'password' })
    password: string;

    @Column({ type: 'varchar', length: 100, comment: 'title' })
    title: string;

    @Column({ type: 'text', comment: 'content' })
    content: string;

    @Column({ type: 'varchar', nullable: true, length: 255, comment: 'attach' })
    attach: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn({ nullable: true })
    deleted_at: Date;
}