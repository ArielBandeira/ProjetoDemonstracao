import { Controller, Get, Post, Patch, Delete, Body, Param, HttpStatus } from '@nestjs/common';

import { ProjectsService } from './projects.service';
import { ProjectDTO } from './project.dto';


@Controller('projects')
export class ProjectsController {

    constructor(private projectsService: ProjectsService) {}

    @Get()
    async showAllProjects() {
        return {
            statusCode: HttpStatus.OK,
            data: await this.projectsService.showAll(),
        };
    }

    @Post()
    async createProjects(@Body() data: ProjectDTO) {
        return {
            statusCode: HttpStatus.OK,
            message: 'Projeto adicionado com sucesso!',
            data: await this.projectsService.create(data),
        };
    }

    @Get(':id')
    async readProject(@Param('id') id: number) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.projectsService.read(id),
        };
    }

    @Patch(':id')
    async updateProject(@Param('id') id: number, @Body() data: Partial<ProjectDTO>) {
        return {
            statusCode: HttpStatus.OK,
            message: 'Projeto atualizado com sucesso!',
            data: await this.projectsService.update(id, data),
        };
    }

    @Delete(':id')
    async deleteProject(@Param('id') id:number) {
        await this.projectsService.destroy(id);
        return {
            statusCode: HttpStatus.OK,
            message: 'Projeto deletado com sucesso!',
        };
    }
}
