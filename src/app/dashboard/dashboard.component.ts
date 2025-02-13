import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="container-fluid mt-5">
      <div class="row">
        <!-- Card 1: Statistiques -->
        <div class="col-md-4 mb-4">
          <div class="card shadow-lg">
            <div class="card-body">
              <h5 class="card-title text-center">Statistiques</h5>
              <div class="d-flex justify-content-between align-items-center">
                <div class="text-center">
                  <h3>1,500</h3>
                  <p class="text-muted">Ventes</p>
                </div>
                <div class="text-center">
                  <h3>120</h3>
                  <p class="text-muted">Clients</p>
                </div>
              </div>
              <hr />
              <button class="btn btn-primary w-100">Voir plus</button>
            </div>
          </div>
        </div>

        <!-- Card 2: Graphique -->
        <div class="col-md-4 mb-4">
          <div class="card shadow-lg">
            <div class="card-body">
              <h5 class="card-title text-center">Graphique</h5>
              <div class="d-flex justify-content-center align-items-center">
                <div class="bg-primary rounded-circle p-4 text-white">
                  <i class="bi bi-bar-chart"></i>
                </div>
              </div>
              <hr />
              <button class="btn btn-warning w-100">Analyser</button>
            </div>
          </div>
        </div>

        <!-- Card 3: Notifications -->
        <div class="col-md-4 mb-4">
          <div class="card shadow-lg">
            <div class="card-body">
              <h5 class="card-title text-center">Notifications</h5>
              <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Nouvelle vente
                  <span class="badge bg-success rounded-pill">+15</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Nouveau message
                  <span class="badge bg-info rounded-pill">2</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Retour produit
                  <span class="badge bg-danger rounded-pill">1</span>
                </li>
              </ul>
              <hr />
              <button class="btn btn-danger w-100">Voir toutes</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Card: Activité récente -->
      <div class="row">
        <div class="col-12">
          <div class="card shadow-lg">
            <div class="card-body">
              <h5 class="card-title text-center">Activité Récente</h5>
              <ul class="list-group">
                <li class="list-group-item">Client A a effectué un achat</li>
                <li class="list-group-item">Client B a laissé un message</li>
                <li class="list-group-item">Retour produit par Client C</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

}