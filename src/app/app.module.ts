import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { AudioPlayerButtonsComponent } from './audio-player/audio-player-buttons/audio-player-buttons.component';
import { GameComponent } from './game/game.component';
import { QuestionComponent } from './game/question/question.component';
import { GameService } from "src/services/gameService";
import { AudioService } from "src/services/audioService";
import { ProgressBarComponent } from './game/progress-bar/progress-bar.component';
import { GameOverComponent } from './game-over/game-over.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "gameover", component: GameOverComponent}
];

@NgModule({
  declarations: [AppComponent, HomeComponent, AudioPlayerComponent, AudioPlayerButtonsComponent, GameComponent, QuestionComponent, ProgressBarComponent, GameOverComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [GameService, AudioService],
  bootstrap: [AppComponent]
})
export class AppModule {}
