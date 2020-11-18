import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProjectEntity } from './project.entity';
import { ProjectDTO } from './project.dto';

@Injectable()
export class ProjectsService {

    constructor(
        @InjectRepository(ProjectEntity)
        private projectRepository: Repository<ProjectEntity>,
    ) {}

    async showAll(){
        return await this.projectRepository.find();
    }

    async create(data: ProjectDTO) {
        const project = this.projectRepository.create(data);
        await this.projectRepository.save(data);
        return project;
    }

    async findByName(nome: string): Promise<ProjectDTO> {
        return await this.projectRepository.findOne(
            {
                where: {
                    nome: nome,
                },
            }
        );
    }

    async read(id: number) {
        return await this.projectRepository.findOne({ where: { id: id } });
    }

    async update(id: number, data: Partial<ProjectDTO>) {
        await this.projectRepository.update({ id }, data);
        return await this.projectRepository.findOne({ id });
    }

    async destroy(id: number) {
        await this.projectRepository.delete({ id });
        return { deleted: true };
    }
}
