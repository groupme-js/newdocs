import { useEffect, useState } from "react"

export default function JumpToTop() {
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        })
    }, [])

    // This function will scroll the window to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // for smoothly scrolling
        })
    }

    return (
        <>
            {showButton && (
                <button class="jumptotop button is-rounded">
                    <span class="icon" onClick={scrollToTop}>
                        <i class="fas fa-arrow-up"></i>
                    </span>
                </button>
            )}
            {/* &#8679; is used to create the upward arrow */}
        </>
    )
}
