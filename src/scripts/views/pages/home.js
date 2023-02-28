import RestaurantSource from '../../data/fetch-data';
import { articleResto } from '../../components/article-resto';

const Home = {
  async render() {
    return `
    <div id="content" tabindex="0">
      <section class="title-content">
        <h2><span>Explore Restaurant</span></h2>
      </section>
      <div class="explore" id="exploreContent"></div>
    </div>
    `;
  },
  async afterRender() {
    const restaurants = await RestaurantSource.getResto();
    articleResto(restaurants);
  },

};

export default Home;
