import { SearchBar } from "../SearchBar";
import { StyledHero } from "./styles";

export const Hero: React.FC = () => {
  return (
    <StyledHero>
      <div id="hero-background">
        <img
          alt="hero background"
          src="https://images.pexels.com/photos/6445381/pexels-photo-6445381.jpeg?auto=compress&cs=tinysrgb&fit=crop&fp-y=0.54&h=500&sharp=20&w=1400"
          srcSet="https://images.pexels.com/photos/6445381/pexels-photo-6445381.jpeg?auto=compress&cs=tinysrgb&fit=crop&fp-y=0.38&h=500&sharp=15&w=350 350w,https://images.pexels.com/photos/6445381/pexels-photo-6445381.jpeg?auto=compress&cs=tinysrgb&fit=crop&fp-y=0.38&h=500&sharp=15&w=500 500w,https://images.pexels.com/photos/6445381/pexels-photo-6445381.jpeg?auto=compress&cs=tinysrgb&fit=crop&fp-y=0.38&h=500&sharp=15&w=1000 1000w,https://images.pexels.com/photos/6445381/pexels-photo-6445381.jpeg?auto=compress&cs=tinysrgb&fit=crop&fp-y=0.38&h=500&sharp=15&w=1500 1500w,https://images.pexels.com/photos/6445381/pexels-photo-6445381.jpeg?auto=compress&cs=tinysrgb&fit=crop&fp-y=0.38&h=500&sharp=15&w=2000 2000w,https://images.pexels.com/photos/6445381/pexels-photo-6445381.jpeg?auto=compress&cs=tinysrgb&fit=crop&fp-y=0.38&h=500&sharp=15&w=2500 2500w,https://images.pexels.com/photos/6445381/pexels-photo-6445381.jpeg?auto=compress&cs=tinysrgb&fit=crop&fp-y=0.38&h=500&sharp=15&w=3000 3000w,https://images.pexels.com/photos/6445381/pexels-photo-6445381.jpeg?auto=compress&cs=tinysrgb&fit=crop&fp-y=0.38&h=500&sharp=15&w=3500 3500w,https://images.pexels.com/photos/6445381/pexels-photo-6445381.jpeg?auto=compress&cs=tinysrgb&fit=crop&fp-y=0.38&h=500&sharp=15&w=4000 4000w,https://images.pexels.com/photos/6445381/pexels-photo-6445381.jpeg?auto=compress&cs=tinysrgb&fit=crop&fp-y=0.38&h=500&sharp=15&w=5000 5000w"></img>
      </div>
      <div id="hero-footer">
        <a href="https://pexels.com/">
          Photo by <span>eberhard grossgasteiger</span>
        </a>
      </div>
      <div id="hero-content">
        <h1>
          The best free stock photos, royalty free images & videos shared by
          creators.
        </h1>
        <SearchBar margin="0" placeholder="Search for free photos"></SearchBar>
      </div>
    </StyledHero>
  );
};
