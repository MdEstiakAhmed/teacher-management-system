const InfoSection = ({ type, title, data, classes }) => {
    return (
        <>
            <div className={`contentArea ${classes}`}>
                <h3 className="title">{title}</h3>
                {
                    data.map((item, index) => (
                        <div className="content" style={{ display: 'flex', justifyContent: 'space-between' }} key={index}>
                            <Timeline type={type} data={item} />
                            <div className="heading" style={{ display: 'flex', alignItems: 'flex-start' }}>
                                <button className="edit">
                                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" tag="i" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"></path><path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3l8.385-8.415zM16 5l3 3"></path></g></svg>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default InfoSection;

const Timeline = ({ type, data }) => {
    return (
        <>
            {
                type === 'academic' ? (
                    <div>
                        <p className="dateTime">{data.PassingYear}</p>
                        <p className="infoTitle">{`${data.Degree} in ${data.Major}`}</p>
                        <p>{data.Institute}</p>
                        <p>{data.CGPA}</p>
                    </div>
                ) :
                    type === 'training' ? (
                        <div>
                            <p className="dateTime">{data.Year}</p>
                            <p className="infoTitle">{data.Title}</p>
                            <p>{data.Institute}</p>
                            <p>{data.Duration}</p>
                        </div>
                    ) :
                        type === 'teaching' ? (
                            <div>
                                <p className="dateTime">{data.CourseCode}</p>
                                <p className="infoTitle">{data.CourseTitle}</p>
                                <p>{data.Credit}</p>
                            </div>
                        ) :
                            type === 'publication' ? (
                                <div>
                                    <p className="dateTime">{data.Year}</p>
                                    <p className="infoTitle">{data.Title}</p>
                                    <p>{data.Journal}</p>
                                </div>
                            ) :
                                type === 'awardAndScholarship' ? (
                                    <div>
                                        <p className="dateTime">{data.Year}</p>
                                        <p className="infoTitle">{data.Title}</p>
                                        <p>{data.Organization}</p>
                                    </div>
                                ) :
                                    type === 'experience' ? (
                                        <div>
                                            <p className="dateTime">{data.Year}</p>
                                            <p className="infoTitle">{data.Designation}</p>
                                            <p>{data.Organization}</p>
                                        </div>
                                    ) : ""
            }
        </>
    )
}

