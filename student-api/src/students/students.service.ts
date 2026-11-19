import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto.js';
import { UpdateStudentDto } from './dto/update-student.dto.js';
import { Student } from './entities/student.entity.js';

@Injectable()
export class StudentsService {
  private students: Student[] = [];
  private nextId = 1;

  create(dto: CreateStudentDto): Student {
    const student: Student = { id: this.nextId++, ...dto };
    this.students.push(student);
    return student;
  }

  findAll(): Student[] {
    return this.students;
  }

  findOne(id: number): Student {
    const student = this.students.find((s) => s.id === id);
    if (!student) throw new NotFoundException(`Student ${id} not found`);
    return student;
  }

  update(id: number, dto: UpdateStudentDto): Student {
    const student = this.findOne(id);
    Object.assign(student, dto);
    return student;
  }

  remove(id: number) {
    const student = this.findOne(id);
    this.students = this.students.filter((s) => s.id !== id);
    return { message: `Student ${student.id} deleted` };
  }
}