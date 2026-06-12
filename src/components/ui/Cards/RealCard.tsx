import { ImageSwiper } from "@/components/ui/image-swiper";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";

const images = [
    './projects/Atelier/Atelier 1.png',
    './projects/Atelier/Atelier 2.png',
    './projects/Atelier/Atelier 3.png',
    './projects/Atelier/Atelier 4.png',
]

export function RealEstateCard() {
    return (
        <Card className="w-max-400">
            <CardContent className="p-0">
                <ImageSwiper images={images} />
            </CardContent>
            <CardHeader>
                <CardTitle className="text-lg font-semibold">Batumi, Georgia</CardTitle>
                <p className="text-sm text-muted-foreground">5000 Kilometers away</p>
                <p className="mt-1">
                    <span className="font-semibold">$200</span> night
                </p>
            </CardHeader>
        </Card>
    )
}