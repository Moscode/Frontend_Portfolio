interface experiencecardtypes{
  image: string,
  role:string,
  company:string,
  date:string,
  location:string,
  responsibility:string
}

const ExperienceCard = ({image, role, company, date, location, responsibility}: experiencecardtypes) => {
  return (
    <div className='w-[90%] rounded-md mx-[auto] flex flex-col md:flex-row border border-red-500 mt-[20px] px-[10px] py-[10px]'>
          <div className='md:mr-[20px] md:h-[20%] w-[50%] mx-[auto]'>
            <img className='bg-yellow-900' src={image} alt='company' />
          </div>
          <div>
              <div className='text-center flex flex-col md:flex-row justify-between text-[#fff] md:mb-[10px] my-[10px]'>
                <div>
                <h3>{role}</h3>
                <p>{company}</p>
                </div>
                <div>
                  <p>{date}</p>
                  <p>{location}</p>
                </div>
              </div>
              <div className='text-[#fff]'>
                <p>{responsibility}</p>
              </div>
          </div>
    </div>
  )
}

export default ExperienceCard