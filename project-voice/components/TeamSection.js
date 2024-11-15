export default function TeamSection() {
    return (
      <section className="tech-section">
        <div className="container">
          <h2 className="text-center mb-5 text-primary">Our Teams</h2>
          <div class="row g-4">
                <div class="col-md-6 mb-4">
                    <div class="team-member">
                        <div class="team-header">
                            <i class="fas fa-brain team-icon"></i>
                            <h4>Research & Linguistics Team</h4>
                        </div>
                        <ul class="list-unstyled">
                            <li class="team-member-name">Julia Rahmeier</li>
                            <li class="team-member-name">Nidhi Padmanabhan <span class="dual-role">(+ Website Development)</span></li>
                            <li class="team-member-name">Jamie Alfaro <span class="dual-role">(+ Website Development)</span></li>
                            <li class="team-member-name">Kaitlin Kaii <span class="dual-role">(+ Website Development)</span></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="team-member">
                        <div class="team-header">
                            <i class="fas fa-microchip team-icon"></i>
                            <h4>Sensor Team</h4>
                        </div>
                        <ul class="list-unstyled">
                            <li class="team-member-name">Spencer Thys</li>
                            <li class="team-member-name">Roxanne Lin</li>
                            <li class="team-member-name">Tahira Tariq</li>
                            <li class="team-member-name">Grace Winchell</li>
                            <li class="team-member-name">Julian Edelman</li>
                            <li class="team-member-name">Jimin Lee</li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="team-member">
                        <div class="team-header">
                            <i class="fas fa-database team-icon"></i>
                            <h4>BCI2000 & Brain Data Team</h4>
                        </div>
                        <ul class="list-unstyled">
                            <li class="team-member-name">Sharon Lin</li>
                            <li class="team-member-name">Shaun Rask</li>
                            <li class="team-member-name">Annabelle Chan</li>
                            <li class="team-member-name">Dante Luis</li>
                            <li class="team-member-name">Barbara Kotlan</li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="team-member">
                        <div class="team-header">
                            <i class="fas fa-code team-icon"></i>
                            <h4>Website Development Team</h4>
                        </div>
                        <ul class="list-unstyled">
                            <li class="team-member-name">Nidhi Padmanabhan</li>
                            <li class="team-member-name">Jamie Alfaro</li>
                            <li class="team-member-name">Kaitlin Kaii</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
  }