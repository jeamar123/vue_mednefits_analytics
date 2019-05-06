<script>
import CreditTimePeriod from '../views/cards/summary/CreditTimePeriod';
import GrowthTimePeriod from '../views/cards/summary/GrowthTimePeriod';
import LifeProPlan from '../views/cards/summary/Life-pro-plan';
import ActiveUser from '../views/cards/summary/ActiveUser';
import ActiveClinic from '../views/cards/summary/ActiveClinic';
import ActiveLifePlan from '../views/cards/summary/ActiveLifePlan';
import ActiveProPlan from '../views/cards/summary/ActiveProPlan';
import CreditUsed from '../views/cards/summary/CreditUsed';
import CreditAllocated from '../views/cards/summary/CreditAllocated';
import BarGraph from '../views/cards/summary/Bar-graph';

	var home = {
		components: {
			BarGraph,
			CreditTimePeriod,
			GrowthTimePeriod,
			LifeProPlan,
			ActiveUser,
			ActiveClinic,
			ActiveLifePlan,
			ActiveProPlan,
			CreditUsed,
			CreditAllocated
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

