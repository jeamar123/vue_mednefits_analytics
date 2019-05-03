<script>
import CreditTimePeriod from '../views/cards/CreditTimePeriod';
import GrowthTimePeriod from '../views/cards/GrowthTimePeriod';
import LifeProPlan from '../views/cards/Life-pro-plan';
import BarGraph from '../views/cards/Bar-graph';

	var home = {
		components: {
			BarGraph,
			CreditTimePeriod,
			GrowthTimePeriod,
			LifeProPlan
		},
		data() {
			return {
				user_data : {},
			}
		},
		created() {

		},
		methods: {
			
	  }
	}

	export default home
</script>


<style lang="scss" scoped>
	@import './src/assets/css/home.scss'
</style>

