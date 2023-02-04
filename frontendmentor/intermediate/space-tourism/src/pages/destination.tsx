import { CurrentDestinationProvider } from "../context/CurrentDestinationContext";
import { DestinationMaindiv } from '../components/DestinationPage/DestinationMaindiv';

export const Destination = () => {

    return(
      <CurrentDestinationProvider>
        <DestinationMaindiv />
      </CurrentDestinationProvider>
    )
}