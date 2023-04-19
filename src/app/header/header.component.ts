import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{
    private userSub: Subscription;

    constructor(
        private dataStorage: DataStorageService, 
        private authService: AuthService
        ) { }

    ngOnInit() {
   this.userSub = this.authService.user.subscribe();
    }

    onSaveData() {
        this.dataStorage.storeRecipes();
    }

    onFetchData(){
        this.dataStorage.fetchRecipes().subscribe();
    }

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
}