const FooterCopyright = () => {
    return (
        <div className="border-t border-gray-200 pt-6">
            <p className="text-center text-sm text-gray-600">
                © {new Date().getFullYear()} Accredian. All rights reserved.
            </p>
        </div>
    );
};

export default FooterCopyright;