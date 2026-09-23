import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly newTask = signal('');
  readonly tasks = signal<Task[]>([]);
  private nextTaskId = 1;

  get pendingCount(): number {
    return this.tasks().filter((task) => !task.completed).length;
  }

  updateNewTask(value: string | null | undefined): void {
    this.newTask.set(value ?? '');
  }

  addTask(): void {
    const title = this.newTask().trim();
    if (!title) {
      return;
    }

    this.tasks.update((tasks) => [
      ...tasks,
      {
        id: this.nextTaskId++,
        title,
        completed: false,
      },
    ]);
    this.newTask.set('');
  }

  toggleTask(taskId: number): void {
    this.tasks.update((tasks) =>
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task,
      ),
    );
  }

  deleteTask(taskId: number): void {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== taskId));
  }
}
