 


export interface Champion {

  name:string;
  title:string;
  lore:string;
  blurb:string;


}
export interface Champions {
    data : {
        [key:string] : Champion; 
        }
  
    
    }