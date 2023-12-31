import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HireLogin from "../pages/HireLogin";
import HireSignUp from "../pages/HireSignUp";
import Home from "../pages/Home";
import PerfilChoose from "../pages/PerfilChoose";
import PerfilPage from "../pages/PerfilPage";
import ServicesExplorer from "../pages/ServicesExplorer";
import SkillExplorer from "../pages/ServicesExplorer/SkillExplorer";
import HomeContractor from "../pages/HomeContractor";
import PerfilEditPage from "../pages/PerfilEditPage";
import WorkLogin from "../pages/WorkLogin";
import WorkSignUp from "../pages/WorkSignUp";
import ServicePage from "../pages/ServicesPage";
import CreateEditServices from "../pages/CreateEditServices";
import ServicesForm from "../pages/CreateEditServices/ServicesForm";
import AdmService from "../pages/AdmService";
import PerfilPageHire from "../pages/PerfilPageHire";
import PerfilEditPageHire from "../pages/PerfilEditPageHire";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Screen name="PerfilChoose" component={PerfilChoose} />
			<Screen name="WorkLogin" component={WorkLogin} />
			<Screen name="WorkSignUp" component={WorkSignUp} />
			<Screen name="HireLogin" component={HireLogin} />
			<Screen name="HireSignUp" component={HireSignUp} />
			<Screen name="Home" component={Home} />
			<Screen name="ServicesPage" component={ServicePage} />
			<Screen name="ServicesExplorer" component={ServicesExplorer} />
			<Screen name="SkillExplorer" component={SkillExplorer} />
			<Screen name="PerfilPage" component={PerfilPage} />
			<Screen name="HomeContractor" component={HomeContractor} />
			<Screen name="PerfilEditPage" component={PerfilEditPage} />
      		<Screen name="CreateEditServices" component={CreateEditServices} />
			<Screen name="ServicesForm" component={ServicesForm} />
			<Screen name="AdmService" component={AdmService} />
			<Screen name="PerfilPageHire" component={PerfilPageHire} />
			<Screen name="PerfilEditPageHire" component={PerfilEditPageHire} />
		</Navigator>
	);
}
