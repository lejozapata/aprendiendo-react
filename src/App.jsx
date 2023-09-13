import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    const formatUserName = (userName)=> `@${userName}`
return ( 
<section className='App'>
     <TwitterFollowCard formatUserName={formatUserName}
     isFollowing={true} userName="lejozapata" name="Alejandro Zapata Lopera"/>

     <TwitterFollowCard formatUserName={formatUserName}
     isFollowing={false} userName="eldiariodedross" name="Dross Rotzank"/>

     <TwitterFollowCard formatUserName={formatUserName}
     userName="elonmusk" name="Elon Musk"/>
</section>
)
}