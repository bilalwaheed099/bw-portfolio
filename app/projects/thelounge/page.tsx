import Image from "next/image";
import Link from "next/link";
const Home = () => {
    return ( 
        <div className="bg-black min-h-screen w-[100%]">
            <div className="w-[90%] md:w-[80%] mx-auto flex flex-col justify-start items-center py-20">
                {/* HERO */}
                <p className="text-4xl font-bold text-center text-gray-100">The Lounge</p>
                <p className="text-gray-100/40 text-md mt-8 text-center md:text-start w-[90%] md:w-[80%]">The lounge is a platform where you can register, join lobbies and play the classic multiplayer game of Court Piece with your friends right in your browser. The platform is facing some deployment issues. You can try it out <Link href="https://lounge-client.vercel.app/" target="_blank" className="text-blue-700 font-semibold">here</Link>. However, you might face some bugs or lag.</p>
                <p className="text-gray-100/40 text-md mt-8 text-center md:text-start w-[90%] md:w-[80%]">Court-piece is a game with two players, divided into two teams. The lounge has a variant for 2 players as well.</p>
                <p className="text-gray-100/40 text-md mt-8 text-center md:text-start w-[90%] md:w-[80%]">Join the platform and start exploring.</p>
                <Image src={"/thelounge/landing.png"} loading="lazy" alt={""} width="2000" height="2000" className="w-[90%] md:w-[80%] mt-8"/>
                {/* Details */}
                <p className="text-gray-100/40 text-md mt-8 text-center md:text-start w-[90%] md:w-[80%]">You can create your own lobby and invite your friends to that one.</p>
                <Image src={"/thelounge/create-lobby.png"} loading="lazy" alt={""} width="2000" height="2000" className="w-[90%] md:w-[80%] mt-8"/>
                <p className="text-gray-100/40 text-md mt-8 text-center md:text-start w-[90%] md:w-[80%]">Or you can search another user's lobby from the search bar and join that one.</p>
                <Image src={"/thelounge/search-rooms.png"} loading="lazy" alt={""} width="2000" height="2000" className="w-[90%] md:w-[80%] mt-8"/>
                <p className="text-gray-100/40 text-md mt-8 text-center md:text-start w-[90%] md:w-[80%]">Or you can search another user's lobby from the search bar and join that one.</p>
                <Image src={"/thelounge/lobby-joined.png"} loading="lazy" alt={""} width="2000" height="2000" className="w-[90%] md:w-[80%] mt-8"/>
                <p className="text-gray-100/40 text-md mt-8 text-center md:text-start w-[90%] md:w-[80%]">Once inside the lobby, after clicking on the connect button you can see the list of players in the current lobby. You can also use the group chat by clicking on the message icon in the top-right of the screen.</p>
                <Image src={"/thelounge/messages.png"} loading="lazy" alt={""} width="2000" height="2000" className="w-[90%] md:w-[80%] mt-8"/>
                <p className="text-gray-100/40 text-md mt-8 text-center md:text-start w-[90%] md:w-[80%]">Before starting a game, the players need to form teams. You can join or leave a team as you wish.</p>
                <Image src={"/thelounge/gameplay-joined.png"} loading="lazy" alt={""} width="2000" height="2000" className="w-[90%] md:w-[80%] mt-8"/>
                <p className="text-gray-100/40 text-md mt-8 text-center md:text-start w-[90%] md:w-[80%]">Court-Piece is originally a 4-player game, but a 2-player modified variant has been developed just for fun, along with the 4-plaer varaint of course.</p>
                <p className="text-gray-100/40 text-md mt-8 text-center md:text-start w-[90%] md:w-[80%]">When the game is started, the first hand is dealt to the starting player and the player has to call the trump suite.</p>
                <Image src={"/thelounge/lobby-call.png"} loading="lazy" alt={""} width="2000" height="2000" className="w-[90%] md:w-[80%] mt-8"/>
                <p className="text-gray-100/40 text-md mt-8 text-center md:text-start w-[90%] md:w-[80%]">After the trump suite is called, the game proceeds according to the rules.</p>
                <Image src={"/thelounge/game-starting.png"} loading="lazy" alt={""} width="2000" height="2000" className="w-[90%] md:w-[80%] mt-8"/>
                <p className="text-gray-100/40 text-md mt-8 text-center md:text-start w-[90%] md:w-[80%]">The cards are played until one of the teams has a chance to pick up all the cards played previously. At this point, the player who has the chance to pick up the played cards has a crown above his name.</p>
                <Image src={"/thelounge/gameplay-crown.png"} loading="lazy" alt={""} width="2000" height="2000" className="w-[90%] md:w-[80%] mt-8"/>
                <p className="text-gray-100/40 text-md mt-8 text-center md:text-start w-[90%] md:w-[80%]">The game proceeds until all the cards have been played. The team with 7 or more tricks wins.</p>
                <Image src={"/thelounge/winner.png"} loading="lazy" alt={""} width="2000" height="2000" className="w-[90%] md:w-[80%] mt-8"/>
            <p className="text-xl font-bold text-center w-[90%] md:w-[80%] md:text-start text-gray-100/50 mt-8">Features under development: </p>
            <p className="text-base text-gray-100 text-center w-[90%] md:w-[80%] md:text-start mt-5">1. Rebuilding the last incomplete game, in case the connection is lost.</p>
            </div>

        </div>
    )
}

export default Home;