
import { ChangeDetectorRef, Component,ContentChildren,EventEmitter,Input, Output, QueryList, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { TableHeaderDirective } from '../../directives/table-header.directive';

type DbItem = { id: number } & any;
@Component({
  selector: 'app-listof',
  templateUrl: './listof.component.html',
  styleUrls: ['./listof.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListofComponent {
  @ContentChildren(TableHeaderDirective) ql: QueryList<TableHeaderDirective> | undefined
  
  private data: DbItem[] = []

  @Input("data") set Data(v: DbItem[]) { this.data = [...v]}
  get Data(): DbItem[] { return this.data }

  @Input("action") actions: string = ''

  @Input("tableClass") tableClass: string = "col-12 table table-striped"

  @Output("edit") editEvent = new EventEmitter<number>()
  @Output("remove") removeEvent = new EventEmitter<number>()

  get Keys(): string[] {

    const keys = this.ql?.map(it => it.Key)
    if (!keys) return []
    return keys as string[];
  }

  constructor(
    private $change: ChangeDetectorRef
  ) {}

  ngOnInit() {
  }

  ngOnChanges(sc: SimpleChanges) {
  }

  ngAfterViewInit() {
  }
  
  triggerEdit({id} :DbItem) {
    this.editEvent.emit(id)
  }
  triggerRemove({id} :DbItem) {
    const index = this.data.findIndex(it => it.id == id)
    if (index < 0) return
    this.data.splice(index, 1)
    this.removeEvent.emit(id)
  }
}
