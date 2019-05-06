<script>
import CreditTimePeriod from '../views/cards/summary/CreditTimePeriod';
import GrowthTimePeriod from '../views/cards/summary/GrowthTimePeriod';
import LifeProPlan from '../views/cards/summary/Life-pro-plan';
import BarGraph from '../views/cards/summary/Bar-graph';

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

