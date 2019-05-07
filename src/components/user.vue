<script>
import BarGraph from '../views/cards/summary/Bar-graph';
import ActiveRegistered from '../views/cards/user/Active-registerd';

	var user = {
		components: {
			BarGraph,
			ActiveRegistered
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

	export default user
</script>


<style lang="scss" scoped>
	@import './src/assets/css/home.scss';
</style>

