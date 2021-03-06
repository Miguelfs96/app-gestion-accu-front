import { Component, OnInit, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { AsociadosService } from '../../services/asociados.service';
import { Asociado } from '../../models/asociado';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-tabla-asociados',
  templateUrl: './tabla-asociados.component.html',
  styleUrls: ['./tabla-asociados.component.scss']
})
export class TablaAsociadosComponent implements OnInit, OnChanges {

  public displayedColumns: string[] = ['nombre', 'apellidos', 'dni', 'fechaNacimiento', 'fechaAlta', 'details'];
  public dataSource: MatTableDataSource<Asociado>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor( private asociadoService: AsociadosService) { }

  ngOnInit(): void {
    this.getAsociados();

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getAsociados();

  }

  public getAsociados() {
    this.asociadoService.getAsociadosList().subscribe((asociados: Asociado[]) => {
      console.log(asociados);
      this.dataSource = new MatTableDataSource<Asociado>(asociados);
      this.dataSource.paginator = this.paginator;
    });
  }


}
