import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import ScoreEntry from 'src/models/scoreEntry'

@Injectable({
    providedIn: 'root'
})

export class LeaderboardService{
    private leaderBoardSource=new BehaviorSubject<ScoreEntry[]>([])
    leaderBoard=this.leaderBoardSource.asObservable()
    
    private latestScoreSource = new BehaviorSubject<ScoreEntry | undefined>(undefined)
    latestScore = this.latestScoreSource.asObservable()

    private hasDummyData: boolean = false;

    addEntry(entry: ScoreEntry){
        console.log('addentry')
        let currentBoard=this.leaderBoardSource.value
        let newBoard=[...currentBoard, entry].sort((a, b)=>b.score-a.score)
        this.leaderBoardSource.next(newBoard)
        this.latestScoreSource.next(entry)
    }

    setDummyData() {
        if (!this.hasDummyData) {
            console.log('dummydata')
            let dummyBoard = [
                { name: "PlayerOne", score: 700 },
                { name: "PlayerTwo", score: 500 },
                { name: "PlayerThree", score: 300 },
                { name: "PlayerFour", score: -100 }
            ]
            let current=this.leaderBoardSource.value
            let newBoard=[...current, ...dummyBoard].sort((a, b)=>b.score-a.score)
            this.leaderBoardSource.next(newBoard)
            this.hasDummyData = true;
        }
    }
}