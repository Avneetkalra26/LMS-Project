import React from 'react'
import ContentBanner from '../Banner/ContentBanner'
import CourseContent from '../Content/CourseContent'
import Navbar from '../Navbar/Navbar'

export default function CourseContentPage() {
  return (
    <div>
        <Navbar />
        <ContentBanner/>
        <CourseContent />
    </div>
  )
}
