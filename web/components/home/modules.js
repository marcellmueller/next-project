import { FlickerText } from '@/components/home';
import { Headline } from '@/components/home';

const Modules = ({ module }) => {
  const { _type } = module;
  switch (_type) {
    case 'headline':
      return <Headline content={module} />;
    case 'flickerText':
      return <FlickerText items={module.items} />;
    default:
      return null;
  }
};

export default Modules;
