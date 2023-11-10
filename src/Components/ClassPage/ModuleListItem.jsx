import React, { useState, useEffect, useRef } from 'react';

export default function ModuleListItem(props) {
    let content = props.content

    const [rowsToSpan, setRowsToSpan] = useState(1);

    const contentRef = useRef(null);

    // Measure the content width when the component mounts or when the content changes
    useEffect(() => {
        if (contentRef.current) {
            const contentWidth = contentRef.current.scrollWidth;
            const contentHeight = contentRef.current.scrollHeight;
            const row = Math.ceil(contentHeight / (0.5 * contentWidth));
            setRowsToSpan(row);
        }
    }, [content]);

    return (
        <div className="grid-item" style={{ gridRow: `span ${rowsToSpan}` }}>
            <div id="content" ref={contentRef} style={{ whiteSpace: 'nowrap' }}>
                {content}
            </div>
        </div>
    );
}
