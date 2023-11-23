import MeetupList from "@/components/meetups/MeetupList";
const DUMMY_MEETUP = [{
    id:'m1',
    title:'First Meetup',
    image:'https://images.unsplash.com/photo-1503951458645-643d53bfd90f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1aWxkaW5nc3xlbnwwfHwwfHx8MA%3D%3D',
    address:'F-21,Second Floor,Vasant vihar,New Delhi',
    description:'This is first meetup'
},
{
    id:'m2',
    title:'Second Meetup',
    image:'https://images.unsplash.com/photo-1503951458645-643d53bfd90f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1aWxkaW5nc3xlbnwwfHwwfHx8MA%3D%3D',
    address:'F-21,Second Floor,Vasant vihar,New Delhi',
    description:'This is second meetup'
},
{
    id:'m3',
    title:'Third Meetup',
    image:'https://images.unsplash.com/photo-1503951458645-643d53bfd90f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1aWxkaW5nc3xlbnwwfHwwfHx8MA%3D%3D',
    address:'F-21,Second Floor,Vasant vihar,New Delhi',
    description:'This is third meetup'
}
]

function HomePage()
{
 return (
    <MeetupList meetups={DUMMY_MEETUP} />
 )
}
export default HomePage