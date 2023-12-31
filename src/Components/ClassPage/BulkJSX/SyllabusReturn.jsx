export default function SyllabusReturn(props) {
    let syllabusContent = <></>

    console.log(props.ClassID)

    switch (props.ClassID) {
        // User Interface Design
        case 0:
            syllabusContent = (<>
                <h2>User Interface Design</h2>
                <p>Class times: Tuesday 12:00-3:00pm</p>

                <p>Location: Baldwin 661</p>

                <p>Instructor: Dr. Professor</p>

                <p>Email: doctor.professor@uc.edu</p>

                <p>Office: 812 Rhodes</p>

                <p><strong>Student Hours:</strong> On request.</p>

                <h3><strong>What is this course about:</strong></h3>
                <p>Senior design.  Senior design, senior design.  SENIOR DESIGN. </p>

                <p>We will be doing lots of:</p>
                <ul>
                    <li><strong>senior design</strong> - design but for seniors.</li>
                    <li><strong>design, senior edition</strong>- design design design</li>
                </ul>

                <p>At the end of this course, students will have completed a senior design project. </p>


                <h3><strong>Prerequisites:</strong></h3>

                <ul>
                    <li>Be a senior.</li>
                    <li>Want to get a degree.</li>
                </ul>

                <h3><strong>Materials:</strong></h3>
                <p>For this class, you will need:</p>

                <ul>
                    <li>A computer for completing assignments</li>
                    <li>A notebook with pencils or a tablet for sketching</li>
                </ul>
            </>)
            break

        // Senior Design
        case 1:
            syllabusContent = (<>
                <h2>Senior Design</h2>
                <p>Class times: Tuesday 12:00-3:00pm</p>

                <p>Location: Baldwin 661</p>

                <p>Instructor: Dr. Professor</p>

                <p>Email: doctor.professor@uc.edu</p>

                <p>Office: 812 Rhodes</p>

                <p><strong>Student Hours:</strong> On request.</p>

                <h3><strong>What is this course about:</strong></h3>
                <p>Senior design.  Senior design, senior design.  SENIOR DESIGN. </p>

                <p>We will be doing lots of:</p>
                <ul>
                    <li><strong>senior design</strong> - design but for seniors.</li>
                    <li><strong>design, senior edition</strong>- design design design</li>
                </ul>

                <p>At the end of this course, students will have completed a senior design project. </p>


                <h3><strong>Prerequisites:</strong></h3>

                <ul>
                    <li>Be a senior.</li>
                    <li>Want to get a degree.</li>
                </ul>

                <h3><strong>Materials:</strong></h3>
                <p>For this class, you will need:</p>

                <ul>
                    <li>A computer for completing assignments</li>
                    <li>A notebook with pencils or a tablet for sketching</li>
                </ul>
            </>)
            break

        // Computer Graphics
        case 2:
            syllabusContent = (<>
                <h2>Computer Graphics</h2>
                <p>Class times: Tuesday 12:00-3:00pm</p>

                <p>Location: Baldwin 661</p>

                <p>Instructor: Dr. Professor</p>

                <p>Email: doctor.professor@uc.edu</p>

                <p>Office: 812 Rhodes</p>

                <p><strong>Student Hours:</strong> On request.</p>

                <h3><strong>What is this course about:</strong></h3>
                <p>Senior design.  Senior design, senior design.  SENIOR DESIGN. </p>

                <p>We will be doing lots of:</p>
                <ul>
                    <li><strong>senior design</strong> - design but for seniors.</li>
                    <li><strong>design, senior edition</strong>- design design design</li>
                </ul>

                <p>At the end of this course, students will have completed a senior design project. </p>


                <h3><strong>Prerequisites:</strong></h3>

                <ul>
                    <li>Be a senior.</li>
                    <li>Want to get a degree.</li>
                </ul>

                <h3><strong>Materials:</strong></h3>
                <p>For this class, you will need:</p>

                <ul>
                    <li>A computer for completing assignments</li>
                    <li>A notebook with pencils or a tablet for sketching</li>
                </ul>
            </>)
            break
    }

    return (<div className="ClassPage-Container">
        {syllabusContent}
    </div>)
}