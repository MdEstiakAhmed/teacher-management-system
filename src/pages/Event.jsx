
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"
import useFetch from '../hooks/useFetch'
import { fetchEvents } from '../api/event'
import { useCallback, useEffect, useState } from 'react'
import EventAddForm from '../components/pages/events/EventAddForm'

const localizer = momentLocalizer(moment)

const Event = () => {
    const { data, isFetched, error, fetchData } = useFetch(fetchEvents, {});

    const [eventData, setEventData] = useState([])

    const [isModalShow, setIsModalShow] = useState({
        addForm: false,
        editForm: false,
    });

    const handleModalOpen = (type, value) => {
        setIsModalShow(prev => ({ ...prev, [type]: value ? value : true }))
    }

    const handleModalClose = (type, isRefetch) => {
        if (isRefetch) fetchData();
        setIsModalShow(prev => ({ ...prev, [type]: false }))
    }

    const handleSelectEvent = useCallback(
        (event) => console.log(event),
        // (event) => handleModalOpen("editForm", event),
        []
      )

    useEffect(() => {
        if (data?.data?.length) {
            const events = data.data.map(item => {
                return {
                    ...item,
                    id: item.id,
                    title: item.Title,
                    start: new Date(item.StartDateTime),
                    end: new Date(item.EndDateTime),
                    desc: item.Description,
                }
            })
            setEventData(events)
        }
    }, [data]);
    return (
        <>
            {
                isModalShow.addForm && (
                    <EventAddForm
                        onClose={handleModalClose}
                    />
                )
            }
            <div className="contentArea">
                <div className="userListHeader">
                    <div className="userListActions">
                        <button className="Button primaryButton" onClick={() => handleModalOpen("addForm")}>Add Event</button>
                    </div>
                </div>
                <div className='height600'>
                    <Calendar
                        localizer={localizer}
                        events={eventData}
                        startAccessor="start"
                        endAccessor="end"
                        popup
                        onSelectEvent={handleSelectEvent}
                    />
                </div>
            </div>
        </>
    );
}

export default Event;