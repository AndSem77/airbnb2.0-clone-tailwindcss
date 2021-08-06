export default function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 space-y-10 px-32 py-14 bg-gray-100'>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>HOST</h5>
        <p>Abilon Software</p>
        <p>Presents</p>
        <p>Zero to Full Stack Hero</p>
        <p>Hundreds of Employees</p>
        <p>Join Now</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Say Hi YouTube</p>
        <p>Easter Eggs</p>
        <p>For the Win</p>
      </div>
    </div>
  );
}
