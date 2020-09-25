import { NgModule } from '@angular/core';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { FacemovieComponent } from './facemovie/facemovie.component';
import { CommonModule } from '@angular/common';  
import { PipeModule } from '../pipes/pipe.module';
import { FacetvComponent } from './facetv/facetv.component';
import { FaceSearchComponent } from './face-search/face-search.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ToolbarHomeComponent } from './toolbar-home/toolbar-home.component';
import { ExploreCardComponent } from './explore-card/explore-card.component';
import { MovieComponent } from './movie/movie.component';
import { FavoriteService } from '../services/favorite.service';
import { ListComponent } from './list/list.component';
 

@NgModule({
  declarations: [
    SkeletonComponent,
    FacemovieComponent,
    FacetvComponent, 
    FaceSearchComponent,
    MovieComponent,
    SpinnerComponent,
    ToolbarHomeComponent,
    ExploreCardComponent,
    ListComponent
  ],
  imports:[ 
    CommonModule,
    PipeModule
  ],
  
  exports: [
    SkeletonComponent,
    FacemovieComponent,
    FacetvComponent,
    MovieComponent,
    FaceSearchComponent, 
    SpinnerComponent,
    ToolbarHomeComponent,
    ExploreCardComponent,
    ListComponent
  ] 

})
export class ComponentModule {}
