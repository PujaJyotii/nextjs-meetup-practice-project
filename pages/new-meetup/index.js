import NewMeetupForm from "@/components/meetups/NewMeetupForm"

function NewMeetupPage (){


    const meetUpHandler = (enteredData) => {
        console.log(enteredData)
    }

    return (
        <NewMeetupForm onAddMeetup={meetUpHandler} />
    )

}
export default NewMeetupPage