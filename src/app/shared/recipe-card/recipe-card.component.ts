import {Component, Input, OnInit} from '@angular/core';
import {RecipesModel} from '../../../../core/models/recipes.model';
import {SavedRecipesManager} from '../../../../core/managers/saved.recipes.manager';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  @Input() recipe:RecipesModel;

  constructor(private savedRecipesManager : SavedRecipesManager) {
  }

  ngOnInit(): void {
  }

  extractVideoID(video) {
    // tslint:disable-next-line:variable-name
    let video_id = video.split('v=')[1];
    // tslint:disable-next-line:prefer-const
    let ampersandPosition = video_id.indexOf('&');
    if (ampersandPosition !== -1) {
      video_id = video_id.substring(0, ampersandPosition);
    }
    return video_id;
  }

  toggleSave() {
    if (this.recipe.is_saved) {
      this.savedRecipesManager.removeFromSaved(this.recipe);
    } else {
      this.savedRecipesManager.saveRecipe(this.recipe);
    }
  }
}
